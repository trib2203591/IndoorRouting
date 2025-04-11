<x-guest-layout>
    <div class="flex min-h-screen items-center justify-center p-4">
        <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <p class="mb-4 text-sm text-gray-600 text-center">
                {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
            </p>

            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf

                <!-- Password Field -->
                <div>
                    <x-input-label for="password" :value="__('Password')" />
                    <x-text-input id="password" class="block mt-1 w-full bg-white text-gray-900 border-gray-300 focus:border-scndBlue focus:ring focus:ring-scndBlue focus:ring-opacity-50"
                        type="password" name="password" required autocomplete="current-password" />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <!-- Confirm Button -->
                <div class="flex justify-center mt-4">
                    <x-primary-button class="w-full md:w-auto px-6 py-2 bg-scndBlue hover:bg-thirdBlue">
                        {{ __('Confirm') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-guest-layout>
