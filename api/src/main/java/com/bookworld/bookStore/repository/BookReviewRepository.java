package com.bookworld.bookStore.repository;

import com.bookworld.bookStore.model.Book;
import com.bookworld.bookStore.model.BookReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface BookReviewRepository extends JpaRepository<BookReview, UUID> {
    @Query("select b from BookReview b where b.book = ?1")
    List<BookReview> findByBook(Book book);


}