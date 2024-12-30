<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('barber_id')->constrained('barbers')->cascadeOnDelete();
            $table->text('comment_body');
            $table->integer('comment_rate');
            $table->timestamps();
        });

        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->text('description');
            $table->integer('duration');
            $table->integer('price');
        });

        Schema::create('barbers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->string('surname');
            $table->float('rate');
            $table->string('img_url');
            $table->string('type');
            $table->timestamps();
        });

        Schema::create('service_of_barber', function (Blueprint $table) {
            $table->foreignId('barber_id')->constrained('barbers')->cascadeOnDelete();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->primary(['barber_id', 'service_id']);
        });

        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('barber_id')->constrained('barbers')->cascadeOnDelete();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->date('day');
            $table->foreignId('start_time')->constrained('day_times')->cascadeOnDelete();
            $table->foreignId('end_time')->constrained('day_times')->cascadeOnDelete();
            $table->integer('status');
            $table->timestamps();
        });

        Schema::create('day_times', function (Blueprint $table) {
            $table->id();
            $table->time('start_time');
            $table->time('end_time');
        });

        Schema::create('work_days', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barber_id')->constrained('barbers')->cascadeOnDelete();
            $table->date('day');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
        Schema::dropIfExists('services');
        Schema::dropIfExists('barbers');
        Schema::dropIfExists('service_of_barber');
        Schema::dropIfExists('bookings');
        Schema::dropIfExists('day_times');
        Schema::dropIfExists('work_days');
    }
};
