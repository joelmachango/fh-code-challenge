<?php

namespace App\Http\Controllers;

use App\Grant;
use Illuminate\Http\Request;

class GrantController extends Controller
{
  public function postGrant(Request $request)
  {
    $grant = new Grant();
    $grant->name = $request->input('name');
    $grant->save();
    return response()->json(['grant' => $grant], 201);
  }

  public function getGrants()
  {
    $grants = Grant::all();
    $response = [
      'grants' => $grants
    ];
    return response()->json($response, 200);
  }

  public function putGrant(Request $request, $id)
  {
  }

  public function deleteGrant($id)
  {
  }
}
