import Link from "next/link";

interface Props {}

const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <div className={styles.flexItem}>
                <Link href='/' className={styles.box}>
                    인프런 로고
                </Link>
            </div>
        </header>
    );
}

export default HeaderComponent