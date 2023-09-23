import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { ArrowIcon } from "components/Icons";
import { menuItems } from "utils/menuItems";

function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item?.label} className={styles.item}>
            {item?.children ? (
              <>
                <span>{item?.label}</span>
                <ArrowIcon />
                <div className={styles.childList}>
                  <ul>
                    {item?.children?.map((elem) => (
                      <li key={elem?.label} className={styles.childItems}>
                        <Link href={elem.link} locale={router.locale}>
                          <a>{elem.label} </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
