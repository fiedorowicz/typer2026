# Typer Mundial 2026 — Tomek · Magda · Kuba

Statyczna strona z typerem na MŚ 2026. Punktacja: **3 pkt** za dokładny wynik, **1 pkt** za trafioną tendencję. Tie-breaker przy równej liczbie punktów: liczba dokładnych trafień. Faza pucharowa rozliczana po 90 minutach.

## Wgranie na GitHub Pages

1. Załóż nowe repozytorium (np. `typer2026`) na github.com.
2. Wgraj do niego oba pliki: `index.html` i `dane.js` (przez "Add file → Upload files" albo git push).
3. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)` → Save.
4. Po chwili strona będzie pod adresem `https://TWOJLOGIN.github.io/typer2026/`.

## Codzienna obsługa — edytujesz tylko `dane.js`

**Dodanie typów** (przed pierwszym gwizdkiem) — dopisz do meczu pole `typy`:

```js
{ id: 1, data: "2026-06-11T21:00", faza: "Grupa A", dom: "Meksyk", goscie: "RPA",
  typy: { tomek: [2,1], magda: [1,0], kuba: [3,1] } },
```

Jeśli ktoś nie wysłał typu na czas — po prostu pomiń jego wpis, strona pokaże „—".

**Wpisanie wyniku** po meczu — dodaj pole `wynik`:

```js
  wynik: [2,0],
```

**Faza pucharowa** — gdy poznamy pary 1/16 finału (od 28 czerwca), dopisuj mecze na końcu listy z kolejnymi `id` i odpowiednią `faza` (np. `"1/16 finału"`, `"Ćwierćfinał"`). Pamiętaj: typujemy wynik po 90 minutach.

Najwygodniej edytować plik bezpośrednio na GitHubie (ikonka ołówka przy `dane.js` → Commit changes) — zmiany pojawiają się na stronie po ok. minucie. Da się to zrobić z telefonu.

## Zmiana punktacji

Na górze `dane.js`:

```js
punktacja: { dokladny: 3, tendencja: 1 }
```

Gdybyście kiedyś chcieli np. mnożnik za fazę pucharową — daj znać, łatwo dopisać.
