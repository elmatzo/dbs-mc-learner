export default [
    {
      id: 1,
      text: 'Bei der Bearbeitung der Anfrage σ<sub>A>a</sub>R führt ein Hash Index für das Attribut <em>A</em> manchmal zu einer effizienteren Auswertung aber niemals zu einer weniger effizienten Auswertung als ein B+ Baum Index für dieses Attribut.',
      answer: false
    },
    {
      id: 2,
      text: 'Betrachten Sie die Kostenformel <em>2 · bR ·( 1 + I ) mit I = [ log<sub>m−1</sub> ( [ b<sub>R</sub> / m ] ) ]</em> für das externe Sortieren. Dabei steht I für die Anzahl der <em>“runs”</em>.',
      answer: false
    },
    {
      id: 3,
      text: 'Die Historie <em>r<sub>1</sub>(C), r<sub>2</sub>(D), w<sub>2</sub>(D), w<sub>1</sub>(D), w<sub>2</sub>(C), c<sub>1</sub>, c<sub>2</sub></em> vermeidet kaskadierendes Rücksetzen und ist nicht serialisierbar.',
      answer: true
    },
    {
      id: 4,
      text: 'Ein geballter Index eignet sich vor allem bei Bereichsabfragen.',
      answer: true
    },
    {
      id: 5,
      text: 'Betrachten Sie zwei Relationen <em>R(ABC)</em> und <em>S(ABD)</em>. Dann gelten auf jeden Fall folgende Gleichheiten: <em>( R ⋉ S ) = ( R ⋈ π<sub>A</sub> ( S ) ) = ( R ⋈ π<sub>AB</sub> ( S ) )</em>',
      answer: false
    },
    {
      id: 6,
      text: 'Eine Relation <em>R</em> sei an 6 Netzwerk-Knoten materialisiert mit den Gewichten 5, 4, 3, 7, 2, und 9. Dann sind <em>Q<sub>r</sub>(R) = 11 und Q<sub>w</sub>(R) = 19</em> gultige Lese- bzw. Schreib-Quoren.',
      answer: false
    },
    {
      id: 7,
      text: 'Es gibt Relationen <em>R(AB)</em> mit 100 Tupeln und <em>S(AC)</em> mit 100 Tupeln, für die der Ausdruck <em>R ⋈ S</em> 10000 Tupeln ergibt.',
      answer: false
    },
    {
      id: 8,
      text: 'Betrachten Sie zwei Relationen <em>R(AB)</em> und <em>S(AB)</em>. Dann gelten auf jeden Fall folgende Gleichheiten: <em>( R ⋉ S ) = ( S ⋉ R ) = ( R ⋈ S )</em>.',
      answer: true
    },
    {
      id: 9,
      text: 'Mit PL/pgSQL lassen sich alle Anfragen formulieren, die man mit SQL-92 formulieren könnte',
      answer: true
    },
    {
      id: 10,
      text: 'Falls das Ruckrollen von Datenbank- Änderungen durch einen Systemabsturz unterbrochen wird, müss das Datenbanksystem beim Wiederanlauf in der Lage sein, das Rückrollen abzuschließen.',
      answer: true
    },
    {
      id: 11,
      text: 'Betrachten Sie zwei Relationen <em>R(AB)</em> und <em>S(AB)</em>. Dann gilt auf jeden Fall folgende Gleichheit: <em>π<sub>A</sub> ( R − S ) = π<sub>A</sub>R − π<sub>A</sub>S</em>',
      answer: false
    },
    {
      id: 12,
      text: 'Beim Zweiphasen-Commit-Protokoll kann der Koordinator mittels Timer-Uberwachung verhindern, dass beim Absturz eines Agenten die Beendigung einer Transaktion blockiert wird.',
      answer: true
    },
    {
      id: 13,
      text: 'Betrachten Sie zwei Relationen <em>R(AB)</em> und <em>S(AC)</em>. Um den Ausdruck <em>R ⋈ S</em> mittels Index Nested Loop Join auszuwerten, muss <em>A</em> in der Relation <em>S</em> als Fremdschlüssel definiert sein.',
      answer: false
    },{
      id: 14,
      text: '. Eine Relation <em>R</em> sei an 4 Netzwerk-Knoten materialisiert mit den Gewichten 5, 13, 7 und 9. Dann sind <em>Q<sub>r</sub>(R) = 17</em> und <em>Q<sub>w</sub>(R) = 18</em> gültige Lese- bzw. Schreib-Quoren. ',
      answer: true
    },
    {
      id: 15,
      text: 'RAID garantiert die Eigenschaften Recovery, Atomicity, Isolation, und Durability.',
      answer: false
    },
    {
      id: 16,
      text: 'Nehmen Sie an, dass eine Relation <em>R</em> 100 Seiten umfasst und dass die Puffergröße 102 beträgt. Dann verursacht ein Block-Nested-Loop-Join von <em>R</em> mit <em>S</em> geringere I/O-Kosten als ein Sort-Merge-Join.',
      answer: true
    },
    {
      id: 17,
      text: 'Unterschiedliche Ordnungen beim Einfugen der Schlüssel-Werte in einen B+ Baum können zu unterschiedlichen BaumStrukturen fuhren.',
      answer: true
    },
    {
      id: 18,
      text: ' Die Historie <em>w<sub>1</sub>(A), r<sub>2</sub>(B), r<sub>3</sub>(D), w<sub>1</sub>(B), w<sub>2</sub>(D), w<sub>3</sub>(D), c<sub>1</sub>, c<sub>2</sub>, c<sub>3</sub></em> ist serialisierbar aber nicht strikt.',
      answer: false
    },
    {
      id: 19,
      text: 'Betrachten Sie die Relationen <em>R(AB)</em> mit 5000 Tupeln und <em>S(AC)</em> mit 3000 Tupeln. Dann ergibt der Ausdruck <em>R ⋈ S</em> maximal 3000 Tupel.',
      answer: true
    },
    {
      id: 20,
      text: 'Mit SQL-92 lassen sich Anfragen formulieren, die man mit PL/pgSQL nicht formulieren könnte.',
      answer: false
    },
    {
      id: 21,
      text: 'Bei den Einstellungen steal/force ist kein Undo möglich, aber ein Redo nötig.',
      answer: false
    },
    {
      id: 22,
      text: 'Die Historie <em>r<sub>1</sub>(A), r<sub>2</sub>(A), w<sub>1</sub>(A), w<sub>1</sub>(B), w<sub>2</sub>(B), c<sub>1</sub>, c<sub>2</sub></em> ist nicht serialisierbar',
      answer: true
    },
    {
      id: 23,
      text: 'Eine Relation <em>R</em> sei an 6 Netzwerk-Knoten materialisiert mit den Gewichten von jeweils 10. Dann sind <em>Q<sub>r</sub>(R) = 40</em> und <em>Q<sub>w</sub>(R) = 30</em> gültige Lese- bzw. Schreib-Quoren.',
      answer: false
    },
    {
      id: 24,
      text: 'Betrachten Sie drei Relationen <em>U(ABC), V (ABD) und W(CE)</em>. Dann gilt auf jeden Fall folgende Gleichheit: <em>((V ⋈ U) ⋈ W) = (U ⋊ (V ✕ W))</em>.',
      answer: true
    },
    {
      id: 25,
      text: 'ACID garantiert die Eigenschaften Atomicity, Consistency, Isolation, und Durability',
      answer: true
    },
    {
      id: 26,
      text: 'Es gibt Relationen <em>R(<u>A</u>B)</em> mit 100 Tupeln und <em>S(AC)</em> mit 100 Tupeln, fur die der Ausdruck R ⋉ S 1000 Tupeln ergibt.'
    },
    {
      id: 27,
      text: 'Wenn ein Join mittels Hybrid Hash Join realisiert wird, dann kann das dadurch berechnete Ergebnis mehr Tupel umfassen, als wenn derselbe Join mittels Hash Join realisiert wurde.',
      answer: false
    },
    {
      id: 28,
      text: 'Mit PL/pgSQL lassen sich Anfragen formulieren, die man mit SQL-92 nicht formulieren könnte.',
      answer: true
    },
    {
      id: 29,
      text: 'Die Anzahl der Zyklen im Wartegraphen entspricht immer der Anzahl der Transaktionen, die zuruckgesetzt werden müssen, um einen Deadlock aufzulösen.'
      answer: false
    },
    {
      id: 30,
      text: 'Die Gesamtkosten fur die Sortierung einer Tabelle <em>T</em> sind <em>2b<sub>T</sub> ( 1 + [ log<sub>m−1</sub> ( [b<sub>T</sub> / m ] ) ] )</em>, mit b<sub>T</sub> als Anzahl der Seiten von <em>T</em> am Hintergrundspeicher und m als Anzahl der Seitenrahmen im Datenbankpuffer.',
      answer: true
    },
    {
      id: 31,
      text: 'Nehmen Sie an, dass beim Zweiphasen-Commit-Protokoll einer der Agenten absturzt. Dann kann der Koordinator trotzdem entscheiden, ob eine Transaktion erfolgreich war oder nicht.',
      answer: true
    },
    {
      id: 32,
      text: 'Die Vollständigkeit der Fragmentierung in einem verteilten Datenbankmanagementsystem ist Voraussetzung fur die Rekonstruierbarkeit.',
      answer: true
    },
    {
      id: 33,
      text: 'Betrachten Sie zwei Relationen <em>R(AB) und S(BC)</em>. Das Ergebnis des Ausdrucks <em>(π<sub>B</sub>(R) ∪ π<sub>B</sub>(S)) ⋈ S</em> enthält ausschließlich Tupel, die auch in <em>S</em> enthalten sind.',
      answer: true
    },
    {
      id: 34,
      text: 'Betrachten Sie drei Relationen <em>R(AB), S(AB)</em> und <em>T(BC)</em>. Dann gilt auf jeden Fall folgende Gleichheit: <em> ( π<sub>B</sub> ( R ) ∩ π<sub>B</sub> ( S ) ) ⋈ T = (π<sub>B</sub> ( R ) ⋈ T ) ⋈ π<sub>B</sub> ( S ) ) ⋈ T</em>.',
      answer: true
    },
    {
      id: 35,
      text: 'Geschachtelte Relationen in objektrelationalen Datenbanken erlauben unter Umst¨anden eine effizientere Auswertung von Anfragen bezuglich 1:n-Relationen.',
      answer: true
    },
    {
      id: 36,
      text: 'Nehmen Sie an, dass ein Index mit 1000 Schlusseln mittels B-Baum vom Grad 10 realisiert wird. Dann gibt es mehrere gultige Möglichkeiten, diese 1000 Schlussel im B-Baum anzuordnen. Aber in jedem Fall hat der B-Baum die Tiefe 2 (d.h.: Wurzel + 2 zusätzliche Ebenen darunter).',
      answer: false
    },
    {
      id: 37,
      text: 'Betrachten Sie einen Hash Index, der die Daten selbst (und nicht nur die TIDs) enthält. Bei einer Punktanfrage mit diesem Index sind im Idealfall 1.1 Seitenzugriffe notwendig.',
      answer: false
    },
    {
      id: 28,
      text: 'Bei der Historie <em>r<sub>1</sub>(A), r<sub>2</sub>(A), w<sub>2</sub>(B), r<sub>1</sub>(B), a<sub>1</sub></em> fuhrt der Abbruch der Transaktion <em>T<sub>1</sub></em> zu einem kaskadierenden Rucksetzen von <em>T<sub>2</sub></em>.',
      answer: false
    }
];
