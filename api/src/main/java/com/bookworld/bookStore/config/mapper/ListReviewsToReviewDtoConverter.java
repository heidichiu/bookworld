package com.bookworld.bookStore.config.mapper;

import com.bookworld.bookStore.dto.BookReviewDto;
import com.bookworld.bookStore.dto.UserDto;
import com.bookworld.bookStore.model.BookReview;
import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ListReviewsToReviewDtoConverter implements Converter<List<BookReview>, List<BookReviewDto>> {
    @Override
    public List<BookReviewDto> convert(MappingContext<List<BookReview>, List<BookReviewDto>> context) {
        List<BookReview> source = context.getSource();

        List<BookReviewDto> output = source.stream().map(
                review -> reviewToReviewDto(review)
        ).collect(Collectors.toList());

        return output;
    }

    private BookReviewDto reviewToReviewDto(BookReview review) {
        return BookReviewDto.builder()
                .id(review.getId())
                .content(review.getContent())
                .createdAt(review.getCreatedAt())
                .updatedAt(review.getUpdatedAt())
                .score(review.getScore())
                .title(review.getTitle())
                .bookId(review.getBook().getId())
                .user(
                        UserDto.builder()
                                .id(review.getUser().getId())
                                .email(review.getUser().getEmail())
                                .name(review.getUser().getName())
                                .build()
                )
                .build();
    }


}