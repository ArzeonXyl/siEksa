<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class StudentDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('StudentDashboard');
    }
    public function classroom()
    {
        return Inertia::render('Classroom');
    }
}
