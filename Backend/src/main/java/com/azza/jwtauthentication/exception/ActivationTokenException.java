package com.azza.jwtauthentication.exception;

public class ActivationTokenException extends RuntimeException {
    public ActivationTokenException(String message) {
        super(message);
    }
}