import SessionProvider from "./provider/session-provider";
import RootRouter from "./root-router";

export default function App() {
  return (
    <SessionProvider>
      <RootRouter />
    </SessionProvider>
  );
}
