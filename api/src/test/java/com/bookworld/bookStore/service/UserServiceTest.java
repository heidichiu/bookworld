package com.bookworld.bookStore.service;

import com.bookworld.bookStore.dto.UserDto;
import com.bookworld.bookStore.model.User;
import com.bookworld.bookStore.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import static org.assertj.core.api.Assertions.assertThat;


@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @InjectMocks
    UserService userService;

    @Mock
    ModelMapper modelMapper;

    @Mock
    UserRepository userRepository;

    @Mock
    PasswordEncoder passwordEncoder;

    @Test
    public void shouldReturnUserIdWhenCalledWithUserData() {
        UUID id = UUID.randomUUID();
        when(userRepository.saveAndFlush(any())).thenReturn(getUser(id));
        when(modelMapper.map(any(), any())).thenReturn(getUser(id));

        UUID uuid = userService.addUser(getUserDto());

        assertThat(uuid).isNotNull();
        assertThat(uuid).isEqualTo(id);

    }

    @Test
    public void shouldReturnUserWhenEmailExists() {
        UUID id = UUID.randomUUID();
        when(userRepository.findUserByEmail(anyString())).thenReturn(getUser(id));
        when(modelMapper.map(any(), any())).thenReturn(getUserDto());

        UserDto email = userService.getUserByEmail("email");

        assertThat(email).isNotNull();
        assertThat(email.getName()).isEqualTo("username");
    }

    @Test
    public void shouldThrowErrorWhenEmailNotExists() {
        UUID id = UUID.randomUUID();
        when(userRepository.findUserByEmail(anyString())).thenThrow(new RuntimeException("error"));

        assertThatThrownBy(()->userService.getUserByEmail("email")).isInstanceOf(RuntimeException.class);
    }

    private UserDto getUserDto() {
        return UserDto.builder()
                .password("password")
                .id(UUID.randomUUID())
                .name("username")
                .email("email")
                .build();
    }

    private User getUser(UUID id) {

        return User.builder()
                .password("password")
                .id(id)
                .name("username")
                .email("email")
                .build();
    }

}