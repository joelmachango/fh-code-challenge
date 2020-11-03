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
    $grant = Grant::find($id);
    if (!$grant) {
      return response()->json(['message' => 'Document not found'], 404);
    }
    $grant->content = $request->input('name');
    $grant->save();
    return response()->json(['grant' => $grant], 200);
  }

  public function deleteGrant($id)
  {
    $grant = Grant::fing($id);
    $grant->delete();
    return response()->json(['message' => 'Grant name deleted'], 200);
  }
}
