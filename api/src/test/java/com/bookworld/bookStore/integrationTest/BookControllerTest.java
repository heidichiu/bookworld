package com.bookworld.bookStore.integrationTest;

import com.bookworld.bookStore.BookStoreApplication;
import com.bookworld.bookStore.dto.BookDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = BookStoreApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class BookControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    @Sql(scripts = {"classpath:InsertInitialBookRecordsForTest.sql"})
    void shouldReturnBooksWhenBookApiCalled() {
        BookDto[] listOfBooks = testRestTemplate.getForObject("http://localhost:" + port + "/api/v1/books", BookDto[].class);


        assertThat(listOfBooks).isNotNull();
        assertThat(listOfBooks.length).isEqualTo(18);
    }

    @Test
    @Sql(scripts = {"classpath:InsertInitialBookRecordsForTest.sql"})
    void shouldReturnOneBookWhenCalledWithTestTitle() {
        BookDto[] booksDto = testRestTemplate.getForObject("http://localhost:" + port + "/api/v1/books/test Title", BookDto[].class);
        assertThat(booksDto).isNotNull();
        assertThat(booksDto.length).isEqualTo(1);


    }


}
