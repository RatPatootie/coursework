<?php

use function Pest\Laravel\get;
use function Pest\Laravel\post;

test('registration screen can be rendered', function () {
    $response = get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'role' => 'user',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    expect(auth()->check())->toBeTrue();
    $response->assertRedirect(route('verification.notice'));
});
