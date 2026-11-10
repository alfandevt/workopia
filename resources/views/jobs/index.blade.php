<x-layout>
    <x-slot name="title">Job List</x-slot>
    <h1>Jobs Home</h1>
    <hr>
    <ul>
        @forelse ($jobs as $job)
            <li>{{ $job }}</li>
        @empty
            <li>No jobs available</li>
        @endforelse
    </ul>
</x-layout>
