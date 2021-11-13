import { theme } from "../theme"
import Link from 'next/link'
import styles from "./index.module.css"

export function Button({ btnClassName, linkClassName, href, children }) {
    return (
        <button className={btnClassName}>
          <Link href={href}>
            <a className={linkClassName}>
              {children}
            </a>
          </Link>
        </button>

    );
} 