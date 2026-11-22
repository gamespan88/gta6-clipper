// Entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty (gta6-clipper-01), account golden-beacon-60.
// The clip this entry hands in was made by the agent in its build session: one moment from Rockstar Games'
// "Grand Theft Auto VI Trailer 2" on YouTube — Jason at the prison desk collecting Lucia Caminos, then Lucia
// walking out of the gate into golden-hour light to meet him (trailer 00:51.9-01:14.0) — cut with ffmpeg to a
// 1080x1920 vertical Short (blur-fill, sharp centre), hook text "THIS IS NOT A MOVIE. / IT'S GTA 6." over the
// first 4 seconds, and a 6-second end card carrying make.fun's pitch over the dimmed reunion frame. The moment
// was picked because it is the trailer's most replayed beat and its photoreal light is the hook itself: it
// genuinely looks like a film, and it is gameplay footage. Rendered file: 28.1 s, H.264 + AAC, trailer audio
// kept (lowered under the pitch card, faded out at the end). This program's only job is the hand-in below: copy VIDEO.json, which
// names the uploaded video, to /output/VIDEO.json, where the gate reads it.
//
// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
