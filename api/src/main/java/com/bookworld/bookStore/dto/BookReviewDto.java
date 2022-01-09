package com.bookworld.bookStore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookReviewDto implements Serializable {
    private UUID id;
    @NotNull
    private String title;
    @NotNull
    private String content;
    @NotNull
    @Max(10)
    private String score;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private UUID bookId;
    private UserDto user;
}
