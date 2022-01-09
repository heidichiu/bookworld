package com.bookworld.bookStore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String score;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @NotNull
    private UUID bookId;
    @NotNull
    private UUID userId;
}
