import { permanentRedirect } from "next/navigation";
import { IBBC_PATH } from "@/data/bootcamp/config";

/** Vanity URL kept short for print/offline use; canonical lives at IBBC_PATH. */
export default function BootcampShortcut(): never {
  permanentRedirect(IBBC_PATH);
}
