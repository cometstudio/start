<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PingController extends Controller
{
    public function index(Request $Request)
    {
        return response()->json([
            'message'=>'Pong',
            'headers'=>print_r($Request->headers->all(), true),
            'query'=>print_r($Request->all(), true),
        ]);
    }
}
