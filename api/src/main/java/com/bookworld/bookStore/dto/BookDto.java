package com.bookworld.bookStore.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "BookDto", description = "A book with all information")
public class BookDto {
    @ApiModelProperty(
            readOnly = true,
            value = "UUID",
            dataType = "UUID",
            example = "85146515-3657-4fd2-9deb-00d18818628c",
            notes = "UUID generated by database as book ID"
    )
    private UUID id;

    @ApiModelProperty(
            readOnly = true,
            value = "title",
            dataType = "String",
            example = "Harry Potter",
            notes = "Book title",
            required = true
    )
    private String title;

    @ApiModelProperty(
            readOnly = true,
            value = "description",
            dataType = "String",
            example = "A magic novel.",
            notes = "Book description",
            required = true
    )
    private String description;

    @ApiModelProperty(
            readOnly = true,
            value = "releaseYear",
            dataType = "int",
            example = "1997",
            notes = "Book release year",
            required = true
    )
    private int releaseYear;
}
