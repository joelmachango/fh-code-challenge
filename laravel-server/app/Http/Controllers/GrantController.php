<?php

namespace App\Http\Controllers;

use App\Grant;
use Illuminate\Http\Request;

class GrantController extends Controller
{
  public function postGrant(Request $request)
  {
    $grant = new Grant();
  }

  public function getGrants()
  {
  }

  public function putGrant(Request $request, $id)
  {
  }

  public function deleteGrant($id)
  {
  }
}
