import React from 'react';
import { interpolate, spring, useCurrentFrame } from 'remotion';
import { C, FPS, SPRING, T, kn, clamp } from './theme';
import { Stage } from './chrome';
import { Person, Mini, Bubble, PersonP } from './figures';
import * as K from './kit';
const { mouthOpen, TANVIR, SHUVO, CHACHA, FATHER, useT, sp, breathe, blinkAt, RoomNight, DeskNight, DeskTop, RoomDay, RoomLiving, Relatives, Eye, Doc, Megaphone, StepCard } = K;
type SP = K.SP;
const O = K.O;

// Scene 0: Hook - Looking for gold/silver prices
export const S0: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const phone = sp(lf(0.5), { damping: 12, stiffness: 180, mass: 0.8 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.cream} />
      <text x={270} y={160} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={40} fill={C.ink} opacity={Math.min(1, lf(0.3))}>
        ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ
      </text>
      <text x={270} y={220} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={40} fill={C.red} opacity={Math.min(1, lf(0.5))} transform={`translate(0,${(1 - Math.min(1, lf(0.5))) * 30})`}>
        ಇಂದಿನ ಬೆಲೆ
      </text>
      <g transform={`translate(270,420) scale(${Math.min(1, phone)})`} opacity={Math.min(1, phone)}>
        <rect x={-100} y={-180} width={200} height={360} rx={28} fill="#1a1a2e" stroke={C.red} strokeWidth={4} />
        <rect x={-80} y={-150} width={160} height={280} rx={16} fill="#0d0d1a" />
        <circle cx={0} cy={-110} r={12} fill="#2a2a4a" />
        <rect x={-70} y={140} width={140} height={6} rx={3} fill="#2a2a4a" />
        <text x={0} y={20} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={28} fill={C.red}>WhatsApp</text>
        <path d="M-30 40 Q0 70 30 40" stroke="#25D366" strokeWidth={6} fill="none" strokeLinecap="round" />
      </g>
      <text x={270} y={750} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={26} fill={C.navy} opacity={Math.min(1, lf(1.5))}>
        ತಿಳಿಯಲು ನೀವು ಕಾಯುತ್ತಿದ್ದೀರಾ?
      </text>
    </Stage>
  );
};

// Scene 1: Daily updates on WhatsApp
export const S1: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const msg1 = sp(lf(4.2), { damping: 12, stiffness: 180, mass: 0.8 });
  const msg2 = sp(lf(4.7), { damping: 12, stiffness: 180, mass: 0.8 });
  const msg3 = sp(lf(5.2), { damping: 12, stiffness: 180, mass: 0.8 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.beige} />
      <text x={270} y={120} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={38} fill={C.ink} opacity={Math.min(1, lf(3.9))}>
        ഇന್ಮುಂದೆ ಪ್ರತಿ ದಿನದ
      </text>
      <text x={270} y={180} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={42} fill={C.red} opacity={Math.min(1, lf(4.2))} transform={`translate(0,${(1 - Math.min(1, lf(4.2))) * 30})`}>
        ಬೆಲೆಗಳು WhatsApp_param_names
      </text>
      <g transform="translate(270,350)">
        <g transform={`translate(-200,0) scale(${Math.min(1, msg1)})`} opacity={Math.min(1, msg1)}>
          <rect x={-120} y={-60} width={240} height={120} rx={16} fill="#25D366" />
          <text x={0} y={10} textAnchor="middle" fontFamily="Hind" fontWeight={700} fontSize={22} fill="#fff">ಚಿನ್ನ: ₹{kn(72000)}</text>
        </g>
        <g transform={`translate(0,0) scale(${Math.min(1, msg2)})`} opacity={Math.min(1, msg2)}>
          <rect x={-120} y={-60} width={240} height={120} rx={16} fill="#25D366" />
          <text x={0} y={10} textAnchor="middle" fontFamily="Hind" fontWeight={700} fontSize={22} fill="#fff">ಬೆಳ್ಳಿ: ₹{kn(85000)}</text>
        </g>
        <g transform={`translate(200,0) scale(${Math.min(1, msg3)})`} opacity={Math.min(1, msg3)}>
          <rect x={-120} y={-60} width={240} height={120} rx={16} fill="#25D366" />
          <text x={0} y={10} textAnchor="middle" fontFamily="Hind" fontWeight={700} fontSize={22} fill="#fff">22K: ₹{kn(66000)}</text>
        </g>
      </g>
      <text x={270} y={650} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={24} fill={C.navy} opacity={Math.min(1, lf(6.0))}>
        ನಿಮ್ಮ WhatsApp ನಲ್ಲೇ
      </text>
    </Stage>
  );
};

// Scene 2: New jewelry arrivals
export const S2: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const j1 = sp(lf(7.5), { damping: 10, stiffness: 160, mass: 0.8 });
  const j2 = sp(lf(8.0), { damping: 10, stiffness: 160, mass: 0.8 });
  const j3 = sp(lf(8.5), { damping: 10, stiffness: 160, mass: 0.8 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.cream} />
      <text x={270} y={140} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={40} fill={C.red} opacity={Math.min(1, lf(7.3))} transform={`translate(0,${(1 - Math.min(1, lf(7.3))) * 30})`}>
        ಹೊಸ ಆಭರಣಗಳ ಆಗಮನ
      </text>
      <g transform="translate(270,350)">
        <g transform={`translate(-160,0) scale(${Math.min(1, j1)})`} opacity={Math.min(1, j1)}>
          <ellipse cx={0} cy={0} rx={55} ry={70} fill="#F6EFE8" stroke={C.red} strokeWidth={3} />
          <ellipse cx={0} cy={-15} rx={25} ry={30} fill={C.red} />
          <text x={0} y={85} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={20} fill={C.ink}>ಧರ್ಜೆ</text>
        </g>
        <g transform={`translate(0,0) scale(${Math.min(1, j2)})`} opacity={Math.min(1, j2)}>
          <ellipse cx={0} cy={0} rx={50} ry={50} fill="#F6EFE8" stroke={C.teal} strokeWidth={3} />
          <circle cx={0} cy={0} r={20} fill={C.teal} />
          <text x={0} y={80} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={20} fill={C.ink}>ಅಂಗುಳಿ</text>
        </g>
        <g transform={`translate(160,0) scale(${Math.min(1, j3)})`} opacity={Math.min(1, j3)}>
          <path d="M-50 0 Q0 -60 50 0 Q0 30 -50 0" fill="#F6EFE8" stroke={C.maroon} strokeWidth={3} />
          <path d="M-20 0 Q0 -25 20 0 Q0 15 -20 0" fill={C.maroon} />
          <text x={0} y={85} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={20} fill={C.ink}>ಹಾರ</text>
        </g>
      </g>
    </Stage>
  );
};

// Scene 3: Delivery info & restock
export const S3: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const box = sp(lf(9.0), { damping: 11, stiffness: 180, mass: 0.8 });
  const tag = sp(lf(10.5), { damping: 11, stiffness: 180, mass: 0.8 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.beige} />
      <text x={270} y={140} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={36} fill={C.ink} opacity={Math.min(1, lf(8.6))}>
        Delivery ಮಾಹಿತಿ & Restock
      </text>
      <g transform={`translate(150,280) scale(${Math.min(1, box)})`} opacity={Math.min(1, box)}>
        <rect x={-80} y={-80} width={160} height={160} rx={12} fill="#DDCFB7" stroke={O} strokeWidth={3} />
        <path d="M-40 -40 L40 40 M40 -40 L-40 40" stroke={C.red} strokeWidth={6} strokeLinecap="round" />
        <text x={0} y={100} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={20} fill={C.ink}>Delivery</text>
      </g>
      <g transform={`translate(390,280) scale(${Math.min(1, tag)})`} opacity={Math.min(1, tag)}>
        <rect x={-80} y={-80} width={160} height={160} rx={12} fill="#DDCFB7" stroke={O} strokeWidth={3} />
        <circle cx={0} cy={-10} r={30} fill={C.teal} />
        <text x={0} y={15} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={24} fill="#fff">↺</text>
        <text x={0} y={100} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={20} fill={C.ink}>Restock</text>
      </g>
      <text x={270} y={580} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={26} fill={C.navy} opacity={Math.min(1, lf(11.0))}>
        ನಿಮ್ಮ ನೆಚ್ಚಿನ ಆಭರಣಗಳು\nಮತ್ತೆ stock ಗೆ ಬಂದಿವೆ
      </text>
    </Stage>
  );
};

// Scene 4: Why wait? Join community
export const S4: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const arrow = sp(lf(13.5), { damping: 10, stiffness: 160, mass: 0.7 });
  const community = sp(lf(14.5), { damping: 10, stiffness: 160, mass: 0.7 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.cream} />
      <text x={270} y={140} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={44} fill={C.red} opacity={Math.min(1, lf(13.3))} transform={`translate(0,${(1 - Math.min(1, lf(13.3))) * 40})`}>
        ಹಾಗಾದರೆ ತಡವೇಕೆ?
      </text>
      <g transform={`translate(270,300) scale(${Math.min(1, arrow)})`} opacity={Math.min(1, arrow)}>
        <path d="M0 -80 L0 80" stroke={C.red} strokeWidth={8} strokeLinecap="round" />
        <path d="M-20 40 L0 80 L20 40" stroke={C.red} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform={`translate(270,480) scale(${Math.min(1, community)})`} opacity={Math.min(1, community)}>
        <rect x={-180} y={-60} width={360} height={120} rx={20} fill="#25D366" />
        <circle cx={-130} cy={0} r={30} fill="#128C7E" />
        <text x={-130} y={10} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={28} fill="#fff">WA</text>
        <text x={30} y={0} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={30} fill="#fff">Community ಗೆ ಸೇರಿ</text>
      </g>
      <text x={270} y={680} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={24} fill={C.navy} opacity={Math.min(1, lf(15.5))}>
        ಇಂದೇ ಶ್ರೀ ಎ ಬಿ jewelers
      </text>
    </Stage>
  );
};

// Scene 5: Get all updates
export const S5: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const bell = sp(lf(18.0), { damping: 9, stiffness: 200, mass: 0.7 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.beige} />
      <text x={270} y={140} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={38} fill={C.ink} opacity={Math.min(1, lf(17.7))}>
        ಎಲ್ಲಾ ಹೊಸ Updates
      </text>
      <g transform={`translate(270,350) scale(${Math.min(1, bell)})`} opacity={Math.min(1, bell)}>
        <path d="M-50 40 Q-50 0 -10 -20 Q20 0 10 40 Q0 60 -50 40 Z" fill="#F6EFE8" stroke={C.red} strokeWidth={4} />
        <rect x={-6} y={-50} width={12} height={20} rx={6} fill={C.red} />
        <circle cx={0} cy={-60} r={6} fill={C.red} />
        <g transform="rotate(15)">
          <path d="M-30 -40 Q-10 -20 0 -40" stroke={C.red} strokeWidth={4} fill="none" strokeLinecap="round" />
        </g>
        <g transform="rotate(-15)">
          <path d="M30 -40 Q10 -20 0 -40" stroke={C.red} strokeWidth={4} fill="none" strokeLinecap="round" />
        </g>
      </g>
      <text x={270} y={520} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={36} fill={C.red} opacity={Math.min(1, lf(19.2))} transform={`translate(0,${(1 - Math.min(1, lf(19.2))) * 30})`}>
        ತಪ್ಪದೆ ತಿಳಿದುಕೊಳ್ಳಿ
      </text>
    </Stage>
  );
};

// Scene 6: Brand stamp
export const S6: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const stamp = sp(lf(22.5), { damping: 8, stiffness: 240, mass: 0.6 });
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.night} />
      <circle cx={270} cy={300} r={150} fill={C.maroon} opacity={0.15} />
      <g transform={`translate(270,320) rotate(-12) scale(${Math.min(1, stamp)})`} opacity={Math.min(1, stamp)}>
        <circle r={110} fill="none" stroke={C.red} strokeWidth={12} />
        <path d="M-60 -60 L60 60 M60 -60 L-60 60" stroke={C.red} strokeWidth={20} strokeLinecap="round" />
      </g>
      <text x={270} y={520} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={48} fill={C.red} opacity={Math.min(1, lf(22.8))} transform={`translate(0,${(1 - Math.min(1, lf(22.8))) * 40})`}>
        ಶ್ರೀ ಎ ಬಿ jewelers
      </text>
    </Stage>
  );
};

// Scene 7: Stay updated, stay connected
export const S7: React.FC<SP> = ({ t0, dur }) => {
  const { f, lf } = useT(t0);
  const pulse = 1 + 0.1 * Math.sin(f / 4);
  return (
    <Stage dur={dur}>
      <rect width={540} height={960} fill={C.cream} />
      <circle cx={270} cy={280} r={100} fill="none" stroke={C.red} strokeWidth={4} strokeDasharray="20 10" transform={`rotate(${f * 0.2})`} opacity={0.3} />
      <text x={270} y={200} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={44} fill={C.red} opacity={Math.min(1, lf(24.5))} transform={`translate(0,${(1 - Math.min(1, lf(24.5))) * 30})`}>
        ಶ್ರೀ ಎ ಬಿ jewelers
      </text>
      <text x={270} y={280} textAnchor="middle" fontFamily="Hind" fontWeight={600} fontSize={28} fill={C.ink} opacity={Math.min(1, lf(25.0))}>
        ನಿಮ್ಮ ವಿಶ್ವಾಸ, ನಮ್ಮ アルンカ
      </text>
      <text x={270} y={400} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={42} fill={C.red} opacity={Math.min(1, lf(25.5))} transform={`translate(0,${(1 - Math.min(1, lf(25.5))) * 30}) scale(${pulse})`}>
        Stay Updated
      </text>
      <text x={270} y={470} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={42} fill={C.teal} opacity={Math.min(1, lf(26.0))} transform={`translate(0,${(1 - Math.min(1, lf(26.0))) * 30}) scale(${pulse})`}>
        Stay Connected
      </text>
      <g transform="translate(270,650)">
        <rect x={-100} y={-40} width={200} height={80} rx={16} fill="#25D366" />
        <circle cx={-50} cy={0} r={20} fill="#128C7E" />
        <text x={-50} y={7} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={18} fill="#fff">WA</text>
        <text x={30} y={7} textAnchor="middle" fontFamily="NSB" fontWeight={800} fontSize={22} fill="#fff">Join Now</text>
      </g>
    </Stage>
  );
};

// Scene list
export const SCENES = [
  { s: 0.0, e: 3.9, C: S0 },
  { s: 3.9, e: 8.6, C: S1 },
  { s: 8.6, e: 13.3, C: S2 },
  { s: 13.3, e: 17.7, C: S4 },
  { s: 17.7, e: 22.4, C: S5 },
  { s: 22.4, e: 25.0, C: S6 },
  { s: 25.0, e: 31.0, C: S7 },
];
