<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Barber;

class CommentController extends Controller
{
    public function addComment(Request $request){
        $request->validate([
            'barber_id' => 'required|integer|exists:barbers,id',
            'stars' => 'required|integer|between:1,5',
            'comment' => 'required|string|max:255',
        ]);

        $comment = new Comment();
        $comment->user_id = auth()->id();
        $comment->barber_id = $request->barber_id;
        $comment->comment_body = $request->comment;
        $comment->comment_rate = $request->stars;
    
        $comment->save();

        $avarage = Comment::where('barber_id', $request->barber_id)->avg('comment_rate');
        $avarage = round($avarage, 1);
        $barber = Barber::find($request->barber_id);
        $barber->rate = $avarage;
        $barber->save();
       
        return redirect()->back()->with('message', 'Comment added successfully');
    }
}
