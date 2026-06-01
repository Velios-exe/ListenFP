import '../../styles/ChordViewer.css';
import { useState } from 'react';

/* ── Static mock chords for visual prototype ── */
const CHORDS = [
  { time: 0,   chord: 'Am', beats: 4 },
  { time: 4,   chord: 'C',  beats: 4 },
  { time: 8,   chord: 'G',  beats: 4 },
  { time: 12,  chord: 'D',  beats: 4 },
  { time: 16,  chord: 'F',  beats: 4 },
  { time: 20,  chord: 'Em', beats: 4 },
  { time: 24,  chord: 'Am', beats: 4 },
  { time: 28,  chord: 'G',  beats: 4 },
];

/* SVG fretboard diagrams — finger positions [string(1-6), fret] */
const DIAGRAMS: Record<string, { fingers: [number, number][]; open: number[]; muted: number[]; label: string }> = {
  Am: {
    fingers: [[2,1],[3,2],[4,2]],
    open: [1,5],
    muted: [6],
    label: 'x02210',
  },
  C: {
    fingers: [[2,1],[3,2],[5,3]],
    open: [1,2],
    muted: [6],
    label: 'x32010',
  },
  G: {
    fingers: [[1,3],[5,2],[6,3]],
    open: [2,3,4],
    muted: [],
    label: '320003',
  },
  D: {
    fingers: [[1,2],[2,3],[3,2]],
    open: [4],
    muted: [5,6],
    label: 'xx0232',
  },
  F: {
    fingers: [[1,1],[2,1],[3,2],[4,3],[5,3],[6,1]],
    open: [],
    muted: [],
    label: '133211',
  },
  Em: {
    fingers: [[4,2],[5,2]],
    open: [1,2,3,6],
    muted: [],
    label: '022000',
  },
};

const FRETS = 4;
const STRINGS = 6;

const FretboardSVG = ({ chord }: { chord: string }) => {
  const diagram = DIAGRAMS[chord] ?? DIAGRAMS['Am'];
  const w = 72;
  const h = 80;
  const leftPad = 12;
  const topPad = 14;
  const nutY = topPad;
  const stringSpacing = (w - leftPad - 8) / (STRINGS - 1);
  const fretSpacing = (h - topPad - 8) / FRETS;

  return (
    <svg className="chord-diagram__fretboard-svg" viewBox={`0 0 ${w} ${h}`}>
      {/* Nut */}
      <line className="nut-line" x1={leftPad} y1={nutY} x2={w - 8} y2={nutY} />
      {/* Fret lines */}
      {Array.from({ length: FRETS }).map((_, i) => (
        <line
          key={i}
          className="fret-line"
          x1={leftPad}
          y1={nutY + fretSpacing * (i + 1)}
          x2={w - 8}
          y2={nutY + fretSpacing * (i + 1)}
        />
      ))}
      {/* String lines */}
      {Array.from({ length: STRINGS }).map((_, i) => (
        <line
          key={i}
          className="string-line"
          x1={leftPad + stringSpacing * i}
          y1={nutY}
          x2={leftPad + stringSpacing * i}
          y2={nutY + fretSpacing * FRETS}
        />
      ))}
      {/* Finger dots */}
      {diagram.fingers.map(([str, fret], i) => (
        <circle
          key={i}
          className="finger-dot"
          cx={leftPad + stringSpacing * (STRINGS - str)}
          cy={nutY + fretSpacing * (fret - 0.5)}
          r={5}
        />
      ))}
      {/* Open strings */}
      {diagram.open.map((str, i) => (
        <circle
          key={i}
          className="open-dot"
          cx={leftPad + stringSpacing * (STRINGS - str)}
          cy={nutY - 6}
          r={4}
        />
      ))}
      {/* Muted strings */}
      {diagram.muted.map((str, i) => {
        const cx = leftPad + stringSpacing * (STRINGS - str);
        const cy = nutY - 6;
        return (
          <g key={i}>
            <line className="mute-x" x1={cx-4} y1={cy-4} x2={cx+4} y2={cy+4} />
            <line className="mute-x" x1={cx+4} y1={cy-4} x2={cx-4} y2={cy+4} />
          </g>
        );
      })}
    </svg>
  );
};

type Tab = 'chords' | 'tabs' | 'lyrics';

const TABS_CONTENT = `e|---0---3---3---2---0-----------|
B|---1---0---1---3---1-----------|
G|---2---0---0---2---0-----------|
D|---2---0---2---0---2-----------|
A|---0---2---3-------3-----------|
E|-------3-----------------------|`;

const LYRICS = [
  { chord: 'Am', text: 'On a dark desert highway,' },
  { chord: 'C',  text: 'cool wind in my hair,' },
  { chord: 'G',  text: 'warm smell of colitas,' },
  { chord: 'D',  text: 'rising up through the air.' },
  { chord: 'F',  text: 'Up ahead in the distance,' },
  { chord: 'C',  text: 'I saw a shimmering light.' },
  { chord: 'Em', text: 'My head grew heavy and my sight grew dim,' },
  { chord: 'Am', text: 'I had to stop for the night.' },
];

export const ChordViewer = ({ activeChordIndex = 2 }: { activeChordIndex?: number }) => {
  const [tab, setTab] = useState<Tab>('chords');
  const uniqueChords = [...new Set(CHORDS.map(c => c.chord))];

  return (
    <section className="chord-viewer">
      {/* Tab switcher */}
      <div className="chord-viewer__tabs" role="tablist">
        {(['chords', 'tabs', 'lyrics'] as Tab[]).map(t => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`chord-viewer__tab${tab === t ? ' active' : ''}`}
            onClick={() => setTab(t)}
          >
            {{ chords: 'Аккорды', tabs: 'Табулатура', lyrics: 'Текст' }[t]}
          </button>
        ))}
      </div>

      {/* ── Chords tab ── */}
      {tab === 'chords' && (
        <>
          {/* Chord strip – highlights on playback */}
          <div className="chord-viewer__strip" aria-label="Прогрессия аккордов">
            {CHORDS.map((c, i) => (
              <div
                key={i}
                className={`chord-viewer__chord-token${i === activeChordIndex ? ' active' : ''}`}
              >
                <span className="chord-viewer__chord-name">{c.chord}</span>
                <span className="chord-viewer__chord-beat">{c.beats}♩</span>
              </div>
            ))}
          </div>

          {/* Diagrams */}
          <div className="chord-viewer__diagrams">
            {uniqueChords.map(chord => (
              <div
                key={chord}
                className={`chord-diagram${chord === CHORDS[activeChordIndex]?.chord ? ' active' : ''}`}
              >
                <div className="chord-diagram__name">{chord}</div>
                <div className="chord-diagram__fretboard">
                  <FretboardSVG chord={chord} />
                </div>
                <div className="chord-diagram__fingers">
                  {DIAGRAMS[chord]?.label ?? '------'}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Tabs tab ── */}
      {tab === 'tabs' && (
        <div className="tab-viewer">
          <div className="tab-viewer__header">
            <span className="tab-viewer__title">Guitar Tab — Intro</span>
            <div className="tab-viewer__controls">
              <button className="tab-viewer__ctrl-btn" aria-label="Шрифт меньше">A-</button>
              <button className="tab-viewer__ctrl-btn" aria-label="Шрифт больше">A+</button>
            </div>
          </div>
          <div className="tab-viewer__content">
            <div className="tab-viewer__pre">
              {TABS_CONTENT.split('\n').map((line, i) => {
                const [name, ...rest] = line.split('|');
                return (
                  <span key={i} className="tab-viewer__string">
                    <span className="tab-viewer__string-name">{name}</span>
                    <span className="tab-viewer__string-divider">|</span>
                    <span className="tab-viewer__string-notes">{rest.join('|')}</span>
                    {'\n'}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="tab-viewer__legend">
            <div className="tab-viewer__legend-item">
              <span className="tab-viewer__legend-key">h</span> hammer-on
            </div>
            <div className="tab-viewer__legend-item">
              <span className="tab-viewer__legend-key">p</span> pull-off
            </div>
            <div className="tab-viewer__legend-item">
              <span className="tab-viewer__legend-key">b</span> bend
            </div>
            <div className="tab-viewer__legend-item">
              <span className="tab-viewer__legend-key">/</span> slide up
            </div>
            <div className="tab-viewer__legend-item">
              <span className="tab-viewer__legend-key">~</span> vibrato
            </div>
          </div>
        </div>
      )}

      {/* ── Lyrics tab ── */}
      {tab === 'lyrics' && (
        <div className="chord-viewer__lyrics">
          {LYRICS.map((line, i) => (
            <div key={i} className="chord-viewer__lyrics-line">
              <span className="chord-viewer__lyrics-chord">{line.chord}</span>
              <span className="chord-viewer__lyrics-text">{line.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
