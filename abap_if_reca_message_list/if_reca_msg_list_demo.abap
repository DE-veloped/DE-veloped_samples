*&---------------------------------------------------------------------*
*& Report ZMAGPA_IF_RECA_MSG__DEMO
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT zmagpa_if_reca_msg__demo.

CLASS lcl_application_logger DEFINITION.
  PUBLIC SECTION.
    METHODS:
      main.
ENDCLASS.

CLASS lcl_application_logger IMPLEMENTATION.
  METHOD main.
    "erzeugen des Log Objektes
    DATA(nachrichtensammler) = cf_reca_message_list=>create( id_object = 'LOGOBJEKT' id_subobject = 'UNTEROBJ' ).

    ""hinzufügen einer Nachricht aus einer Nachrichtenklasse
    nachrichtensammler->add(
      EXPORTING
        id_msgty         = 'E'   " Meldung: Nachrichtentyp Fehler
        id_msgid         = 'OO'  " Meldung: Nachrichtenklasse OO (siehe Transaktion SE91)
        id_msgno         = '000' " Meldung: Nachrichtennummer 000
        id_msgv1         = 'Hallo,'      " 1. Nachrichtenvariable als Text
        id_msgv2         = 'das ist'    " 2. Nachrichtenvariable als Text
        id_msgv3         = 'eine Nachricht'        " 3. Nachrichtenvariable als Text
        id_msgv4         = 'aus einer Nachrichtenklasse!'        " 4. Nachrichtenvariable als Text
    ).

    "eine Nachricht aus System-Variablen erzeugen und im Nachrichtensammler speichern
    CALL FUNCTION 'ZMAGPA_FILL_SY_MSG_VARS'
     EXCEPTIONS
       AUSNAHME_DEMO       = 1
       OTHERS              = 2
      .
    IF sy-subrc <> 0.
      nachrichtensammler->add_symsg( ).
    ENDIF.

    "eine Nachricht aus einer Ausnahme an den Nachrichtensammler übergeben
    TRY.
      RAISE EXCEPTION TYPE zcx_magpa_if_reca_msg_demo MESSAGE E000(OO) WITH 'Das ist eine Nachricht aus einer Ausnahme!'.
    CATCH ZCX_MAGPA_IF_RECA_MSG_DEMO INTO DATA(exception).
      nachrichtensammler->add_from_exception(
        EXPORTING
          io_exception = exception    " Globale Exception Referenz
      ).
    ENDTRY.

    "Gesammelten Nachrichten speichern
    nachrichtensammler->store( ).

    COMMIT WORK.

  ENDMETHOD.
ENDCLASS.


START-OF-SELECTION.

  DATA(lo_application_logger) = NEW lcl_application_logger( ).

  lo_application_logger->main( ).