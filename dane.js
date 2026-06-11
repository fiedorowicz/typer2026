// ============================================================
//  TYPER MUNDIAL 2026 — PLIK Z DANYMI
//  To jedyny plik, który edytujesz. Po każdej zmianie: commit.
// ============================================================
//
//  JAK DODAĆ TYPY do meczu (przed pierwszym gwizdkiem):
//      typy: { tomek: [2,1], magda: [1,1], kuba: [0,2] }
//  Jeśli ktoś nie wysłał typu — po prostu go pomiń:
//      typy: { tomek: [2,1], kuba: [0,2] }
//
//  JAK WPISAĆ WYNIK po meczu (faza pucharowa: wynik po 90 minutach!):
//      wynik: [2,0]
//
//  PRZYKŁAD kompletnego meczu:
//      { id: 1, data: "2026-06-11T21:00", faza: "Grupa A",
//        dom: "Meksyk", goscie: "RPA",
//        wynik: [2,0],
//        typy: { tomek: [2,1], magda: [1,0], kuba: [3,1] } },
//
//  FAZĘ PUCHAROWĄ dopisujesz na końcu listy, gdy znamy pary, np.:
//      { id: 73, data: "2026-06-28T21:00", faza: "1/16 finału",
//        dom: "Hiszpania", goscie: "Maroko" },
//
// ============================================================

window.TYPER = {

  punktacja: {
    dokladny: 3,   // dokładny wynik
    tendencja: 1   // trafiony zwycięzca lub remis, zły wynik
  },

  gracze: [
    { id: "tomek", nazwa: "Tomek", kolor: "#F5C84C" },
    { id: "magda", nazwa: "Magda", kolor: "#FF8FA3" },
    { id: "kuba",  nazwa: "Kuba",  kolor: "#62C6F2" }
  ],

  mecze: [

    // ---------- 1. KOLEJKA ----------
    { id: 1,  data: "2026-06-11T21:00", faza: "Grupa A", dom: "Meksyk", goscie: "RPA" },
    { id: 2,  data: "2026-06-12T04:00", faza: "Grupa A", dom: "Korea Płd.", goscie: "Czechy" },
    { id: 3,  data: "2026-06-12T21:00", faza: "Grupa B", dom: "Kanada", goscie: "Bośnia i Hercegowina" },
    { id: 4,  data: "2026-06-13T03:00", faza: "Grupa D", dom: "USA", goscie: "Paragwaj" },
    { id: 5,  data: "2026-06-13T21:00", faza: "Grupa B", dom: "Katar", goscie: "Szwajcaria" },
    { id: 6,  data: "2026-06-14T00:00", faza: "Grupa C", dom: "Brazylia", goscie: "Maroko" },
    { id: 7,  data: "2026-06-14T03:00", faza: "Grupa C", dom: "Haiti", goscie: "Szkocja" },
    { id: 8,  data: "2026-06-14T06:00", faza: "Grupa D", dom: "Australia", goscie: "Turcja" },
    { id: 9,  data: "2026-06-14T19:00", faza: "Grupa E", dom: "Niemcy", goscie: "Curacao" },
    { id: 10, data: "2026-06-14T22:00", faza: "Grupa F", dom: "Holandia", goscie: "Japonia" },
    { id: 11, data: "2026-06-15T01:00", faza: "Grupa E", dom: "Wybrzeże Kości Słoniowej", goscie: "Ekwador" },
    { id: 12, data: "2026-06-15T04:00", faza: "Grupa F", dom: "Szwecja", goscie: "Tunezja" },
    { id: 13, data: "2026-06-15T18:00", faza: "Grupa H", dom: "Hiszpania", goscie: "Rep. Zielonego Przylądka" },
    { id: 14, data: "2026-06-15T21:00", faza: "Grupa G", dom: "Belgia", goscie: "Egipt" },
    { id: 15, data: "2026-06-16T00:00", faza: "Grupa H", dom: "Arabia Saudyjska", goscie: "Urugwaj" },
    { id: 16, data: "2026-06-16T03:00", faza: "Grupa G", dom: "Iran", goscie: "Nowa Zelandia" },
    { id: 17, data: "2026-06-16T21:00", faza: "Grupa I", dom: "Francja", goscie: "Senegal" },
    { id: 18, data: "2026-06-17T00:00", faza: "Grupa I", dom: "Irak", goscie: "Norwegia" },
    { id: 19, data: "2026-06-17T03:00", faza: "Grupa J", dom: "Argentyna", goscie: "Algieria" },
    { id: 20, data: "2026-06-17T06:00", faza: "Grupa J", dom: "Austria", goscie: "Jordania" },
    { id: 21, data: "2026-06-17T19:00", faza: "Grupa K", dom: "Portugalia", goscie: "DR Konga" },
    { id: 22, data: "2026-06-17T22:00", faza: "Grupa L", dom: "Anglia", goscie: "Chorwacja" },
    { id: 23, data: "2026-06-18T01:00", faza: "Grupa L", dom: "Ghana", goscie: "Panama" },
    { id: 24, data: "2026-06-18T04:00", faza: "Grupa K", dom: "Uzbekistan", goscie: "Kolumbia" },

    // ---------- 2. KOLEJKA ----------
    { id: 25, data: "2026-06-18T18:00", faza: "Grupa A", dom: "Czechy", goscie: "RPA" },
    { id: 26, data: "2026-06-18T21:00", faza: "Grupa B", dom: "Szwajcaria", goscie: "Bośnia i Hercegowina" },
    { id: 27, data: "2026-06-19T00:00", faza: "Grupa B", dom: "Kanada", goscie: "Katar" },
    { id: 28, data: "2026-06-19T03:00", faza: "Grupa A", dom: "Meksyk", goscie: "Korea Płd." },
    { id: 29, data: "2026-06-19T21:00", faza: "Grupa D", dom: "USA", goscie: "Australia" },
    { id: 30, data: "2026-06-20T00:00", faza: "Grupa C", dom: "Szkocja", goscie: "Maroko" },
    { id: 31, data: "2026-06-20T03:00", faza: "Grupa C", dom: "Brazylia", goscie: "Haiti" },
    { id: 32, data: "2026-06-20T06:00", faza: "Grupa D", dom: "Turcja", goscie: "Paragwaj" },
    { id: 33, data: "2026-06-20T19:00", faza: "Grupa F", dom: "Holandia", goscie: "Szwecja" },
    { id: 34, data: "2026-06-20T22:00", faza: "Grupa E", dom: "Niemcy", goscie: "Wybrzeże Kości Słoniowej" },
    { id: 35, data: "2026-06-21T02:00", faza: "Grupa E", dom: "Ekwador", goscie: "Curacao" },
    { id: 36, data: "2026-06-21T06:00", faza: "Grupa F", dom: "Tunezja", goscie: "Japonia" },
    { id: 37, data: "2026-06-21T18:00", faza: "Grupa H", dom: "Hiszpania", goscie: "Arabia Saudyjska" },
    { id: 38, data: "2026-06-21T21:00", faza: "Grupa G", dom: "Belgia", goscie: "Iran" },
    { id: 39, data: "2026-06-22T00:00", faza: "Grupa H", dom: "Urugwaj", goscie: "Rep. Zielonego Przylądka" },
    { id: 40, data: "2026-06-22T03:00", faza: "Grupa G", dom: "Nowa Zelandia", goscie: "Egipt" },
    { id: 41, data: "2026-06-22T19:00", faza: "Grupa J", dom: "Argentyna", goscie: "Austria" },
    { id: 42, data: "2026-06-22T23:00", faza: "Grupa I", dom: "Francja", goscie: "Irak" },
    { id: 43, data: "2026-06-23T02:00", faza: "Grupa I", dom: "Norwegia", goscie: "Senegal" },
    { id: 44, data: "2026-06-23T05:00", faza: "Grupa J", dom: "Jordania", goscie: "Algieria" },
    { id: 45, data: "2026-06-23T19:00", faza: "Grupa K", dom: "Portugalia", goscie: "Uzbekistan" },
    { id: 46, data: "2026-06-23T22:00", faza: "Grupa L", dom: "Anglia", goscie: "Ghana" },
    { id: 47, data: "2026-06-24T01:00", faza: "Grupa L", dom: "Panama", goscie: "Chorwacja" },
    { id: 48, data: "2026-06-24T04:00", faza: "Grupa K", dom: "Kolumbia", goscie: "DR Konga" },

    // ---------- 3. KOLEJKA ----------
    { id: 49, data: "2026-06-24T21:00", faza: "Grupa B", dom: "Szwajcaria", goscie: "Kanada" },
    { id: 50, data: "2026-06-24T21:00", faza: "Grupa B", dom: "Bośnia i Hercegowina", goscie: "Katar" },
    { id: 51, data: "2026-06-25T00:00", faza: "Grupa C", dom: "Szkocja", goscie: "Brazylia" },
    { id: 52, data: "2026-06-25T00:00", faza: "Grupa C", dom: "Maroko", goscie: "Haiti" },
    { id: 53, data: "2026-06-25T03:00", faza: "Grupa A", dom: "Czechy", goscie: "Meksyk" },
    { id: 54, data: "2026-06-25T03:00", faza: "Grupa A", dom: "RPA", goscie: "Korea Płd." },
    { id: 55, data: "2026-06-25T22:00", faza: "Grupa E", dom: "Curacao", goscie: "Wybrzeże Kości Słoniowej" },
    { id: 56, data: "2026-06-25T22:00", faza: "Grupa E", dom: "Ekwador", goscie: "Niemcy" },
    { id: 57, data: "2026-06-26T01:00", faza: "Grupa F", dom: "Japonia", goscie: "Szwecja" },
    { id: 58, data: "2026-06-26T01:00", faza: "Grupa F", dom: "Tunezja", goscie: "Holandia" },
    { id: 59, data: "2026-06-26T04:00", faza: "Grupa D", dom: "Turcja", goscie: "USA" },
    { id: 60, data: "2026-06-26T04:00", faza: "Grupa D", dom: "Paragwaj", goscie: "Australia" },
    { id: 61, data: "2026-06-26T21:00", faza: "Grupa I", dom: "Norwegia", goscie: "Francja" },
    { id: 62, data: "2026-06-26T21:00", faza: "Grupa I", dom: "Senegal", goscie: "Irak" },
    { id: 63, data: "2026-06-27T02:00", faza: "Grupa H", dom: "Rep. Zielonego Przylądka", goscie: "Arabia Saudyjska" },
    { id: 64, data: "2026-06-27T02:00", faza: "Grupa H", dom: "Urugwaj", goscie: "Hiszpania" },
    { id: 65, data: "2026-06-27T05:00", faza: "Grupa G", dom: "Egipt", goscie: "Iran" },
    { id: 66, data: "2026-06-27T05:00", faza: "Grupa G", dom: "Nowa Zelandia", goscie: "Belgia" },
    { id: 67, data: "2026-06-27T23:00", faza: "Grupa L", dom: "Panama", goscie: "Anglia" },
    { id: 68, data: "2026-06-27T23:00", faza: "Grupa L", dom: "Chorwacja", goscie: "Ghana" },
    { id: 69, data: "2026-06-28T01:30", faza: "Grupa K", dom: "Kolumbia", goscie: "Portugalia" },
    { id: 70, data: "2026-06-28T01:30", faza: "Grupa K", dom: "DR Konga", goscie: "Uzbekistan" },
    { id: 71, data: "2026-06-28T04:00", faza: "Grupa J", dom: "Algieria", goscie: "Austria" },
    { id: 72, data: "2026-06-28T04:00", faza: "Grupa J", dom: "Jordania", goscie: "Argentyna" }

    // ---------- FAZA PUCHAROWA ----------
    // Dopisuj tutaj, gdy poznamy pary 1/16 finału (od 28 czerwca).
    // Pamiętaj: typujemy i rozliczamy WYNIK PO 90 MINUTACH.

  ]
};
