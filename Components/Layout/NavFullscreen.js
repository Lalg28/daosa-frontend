import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function NavFullscreen() {
  const user = useSelector((state) => state.user);

  return (
    <nav id="mobile-menu">
      <ul>
        <li className="active menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Nosotros</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/cause-details">
            <a>Servicios</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
        {user.jwt && (
          <>
            <li className="menu-item-has-children">
              <Link href="#">
                <a>Privada 1</a>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/blog">
                <a>Privada 2</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
