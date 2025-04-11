<x-guest-layout>
    <div class="flex min-h-screen items-center justify-center p-4">
        <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <p class="mb-4 text-sm text-gray-600 text-center">
                {{ __('Forgot your password? No problem. Just enter your email, and we will send you a password reset link.') }}
            </p>

            <!-- Session Status -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <!-- Email Address -->
                <div>
                    <x-input-label for="email" :value="__('Email')" />
                    <x-text-input id="email" class="block mt-1 w-full bg-white text-gray-900 border-gray-300 focus:border-scndBlue focus:ring focus:ring-scndBlue focus:ring-opacity-50"
                        type="email" name="email" :value="old('email')" required autofocus />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center mt-4">
                    <x-primary-button class="w-full md:w-auto px-6 py-2 bg-scndBlue hover:bg-thirdBlue">
                        {{ __('Send Password Reset Link') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-guest-layout>
