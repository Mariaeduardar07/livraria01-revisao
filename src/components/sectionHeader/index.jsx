import styles from "./sectionHeader.module.css";

const SectionHeader = ({title, viewAllLink, Text}) => {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionHeading}>{title}</h2>
      <a href={viewAllLink} className={styles.viewAll}>
        {Text}
      </a>
    </div>
  );
};

export default SectionHeader;
