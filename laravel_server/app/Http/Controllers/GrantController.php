<?php

namespace App\Http\Controllers;

use App\Grant;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GrantController extends Controller
{
  public function postGrant(Request $request)
  {
    $grant = new Grant();
    $grant->name = $request->input('name');
    $grant->status = $request->input('status');
    $grant->grantor = $request->input('grantor');
    $grant->location = $request->input('location');
    $grant->description = $request->input('description');
    $grant->amount = $request->input('amount');
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

  public function getGrant(Response $response, $id)
  {
    $grants = Grant::all();
    $grant = $grants->get($id);

    $response = [
      'grant' => $grant
    ];
    return response()->json(['grant' => $grant], 200);

    // $grant = Grant::find($id);

    // if (!$grant) {
    //   return response()->json(['message' => 'Document not found'], 404);
    // }
    // $grant->name = $response->output('name');

    // $response = [
    //   'grants' => $grants
    // ];
    // return response()->json($response, 200);
  }

  public function putGrant(Request $request, $id)
  {
    $grant = Grant::find($id);
    if (!$grant) {
      return response()->json(['message' => 'Document not found'], 404);
    }
    $grant->name = $request->input('name');
    $grant->status = $request->input('status');
    $grant->grantor = $request->input('grantor');
    $grant->location = $request->input('location');
    $grant->description = $request->input('description');
    $grant->amount = $request->input('amount');
    $grant->save();
    return response()->json(['grant' => $grant], 200);
  }

  public function deleteGrant($id)
  {
    $grant = Grant::find($id);
    $grant->delete();
    return response()->json(['message' => 'Grant deleted'], 200);
  }
}
