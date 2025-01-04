<!DOCTYPE html>
<html>
<head>
    <title>Підтвердження бронювання</title>
    <style>
        /* Include Tailwind CSS */
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    </style>
</head>
<body class="bg-gray-100 text-gray-900 p-6">
    <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-4">Підтвердження бронювання</h1>
        <p class="mb-4">Шановний {{ $booking->user->name }},</p>
        <p class="mb-4">Ваше бронювання підтверджено.</p>
        <p class="mb-4">Деталі:</p>
        <ul class="list-disc pl-5 mb-4">
            <li class="mb-2"><strong>Перукар:</strong> {{ $booking->barber->name }}</li>
            <li class="mb-2"><strong>Послуга:</strong> {{ $booking->service->name }}</li>
            <li class="mb-2"><strong>Дата:</strong> {{ $booking->day }}</li>
            <li class="mb-2"><strong>Час:</strong> {{ $booking->dayTime->start_time }}</li>
        </ul>
        <p class="mb-4">Дякуємо за бронювання у нас!</p>
    </div>
</body>
</html>
