package com.bookworld.bookStore.controller;

import com.bookworld.bookStore.config.JwtUtil;
import com.bookworld.bookStore.dto.AuthenticationRequest;
import com.bookworld.bookStore.dto.AuthenticationResponse;
import com.bookworld.bookStore.dto.UserDto;
import com.bookworld.bookStore.service.UserDetailService;
import com.bookworld.bookStore.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {
    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private UserDetailService userDetailService;

    @Mock
    private JwtUtil jwtUtil;


    @Test
    public void authenticate_success() {
        String name = "test";
        String password = "asodnoajojd";
        String email = "hello@gmail.com";
        UUID id = UUID.randomUUID();
        UserDto userDto = UserDto.builder()
                .name(name)
                .id(id)
                .password(password)
                .email(email)
                .build();
        when(userService.getUserByEmail(anyString())).thenReturn(userDto);
        String token = "a token";
        when(jwtUtil.generateToken(any())).thenReturn(token);

        ResponseEntity<AuthenticationResponse> responseEntity = userController.authenticate(new AuthenticationRequest(name, password));
        assertThat(responseEntity.getBody()).isNotNull();
        assertThat(responseEntity.getBody().getToken()).isEqualTo("Bearer " + token);
        assertThat(responseEntity.getBody().getUser().getEmail()).isEqualTo(email);
        assertThat(responseEntity.getBody().getUser().getName()).isEqualTo(name);
        assertThat(responseEntity.getBody().getUser().getPassword()).isEqualTo(password);
        assertThat(responseEntity.getBody().getUser().getId()).isEqualTo(id);

    }

    @Test
    public void postRegister_success() {
        UUID uuid = UUID.randomUUID();
        UserDto userDto = UserDto.builder()
                .name("test name")
                .id(uuid)
                .password("newpassword")
                .build();
        when(userService.addUser(any())).thenReturn(uuid);
        ResponseEntity<UUID> responseEntity = userController.addUser(userDto);
        assertThat(responseEntity.getBody()).isNotNull();
        assertThat(responseEntity.getBody()).isEqualTo(uuid);


    }
}
