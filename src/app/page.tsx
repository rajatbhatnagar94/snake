import { Grid } from "@/components/Grid/Grid";

const DEFAULT_ROWS = 10;
const DEFAULT_COLS = 10;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Grid rows={DEFAULT_ROWS} cols={DEFAULT_COLS} />
      </div>
    </main>
  );
}
