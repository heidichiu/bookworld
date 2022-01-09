package com.bookworld.bookStore.config.mapper;

import com.bookworld.bookStore.dto.BookDto;
import com.bookworld.bookStore.dto.BookReviewDto;
import com.bookworld.bookStore.model.Book;
import com.bookworld.bookStore.model.BookReview;
import org.modelmapper.PropertyMap;

public class BookToBookDtoMap extends PropertyMap<Book, BookDto> {
    @Override
    protected void configure() {
        using(new ListReviewsToReviewDtoConverter()).map(source.getBookReviews()).setBookReviews(null);
    }
}
