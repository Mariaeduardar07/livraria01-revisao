import styles from "./booksSection.module.css";
import SectionHeader from "../sectionHeader";
import BookCard from "../bookCard";

const BooksSection = ({ books, renderStars, text, title, viewAllLink }) => {
  return (
    <section className={styles.bookSection}>
      <SectionHeader Text={text} title={title} viewAllLink={viewAllLink} />
      <div className={styles.bookGrid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} renderStars={renderStars} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
