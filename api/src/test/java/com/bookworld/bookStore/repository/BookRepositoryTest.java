package com.bookworld.bookStore.repository;

import com.bookworld.bookStore.model.Book;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.stream.StreamSupport;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class BookRepositoryTest {
    @Autowired
    private BookRepository bookRepository;

    @Test
    @Sql(scripts = {"classpath:InsertInitialBookRecordsForTest.sql"})
    void shouldAbleToFetchAllBooksInDb() {
        Iterable<Book> all = bookRepository.findAll();
        long totalBookCount = StreamSupport.stream(all.spliterator(), false).count();
        Assertions.assertEquals(totalBookCount, 18);
    }

    @Test
    @Sql(scripts = {"classpath:InsertInitialBookRecordsForTest.sql"})
    void shouldReturnOneBookWhenTitleIsTitle() {
        List<Book> title = bookRepository.findBooksByTitle("test title");
        Assertions.assertEquals(title.size(), 1);
    }

    @Test
    @Sql(scripts = {"classpath:InsertInitialBookRecordsForTest.sql"})
    void shouldReturnOneBookWhenTitleIsTitleIgnoreCase() {
        List<Book> title = bookRepository.findBooksByTitleIgnoreCase("TEST TITLE");
        Assertions.assertEquals(title.size(), 1);
    }
}
