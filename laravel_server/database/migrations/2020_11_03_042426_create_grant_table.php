<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrantTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::dropIfExists('grants');
    Schema::create('grants', function (Blueprint $table) {
      $table->increments('id');
      $table->timestamps();
      $table->text('name');
      $table->text('status');
      $table->text('grantor');
      $table->text('location');
      $table->text('description');
      $table->text('amount');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('grant');
  }
}
