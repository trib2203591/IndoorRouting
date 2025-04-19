<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    {{-- form frame --}}
    <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col md:flex-row bg-scndBlue w-full max-w-lg md:max-w-3xl shadow-xl rounded-xl overflow-hidden">
            <div class="flex-1 flex flex-col items-center justify-center p-6">
                <img src="{{ asset('images/ctu.png') }}" alt="Logo" class="w-20 md:w-28">
                <h1 class="text-white text-lg font-light mt-1">Chào mừng</h1>
                <h1 class="font-extrabold text-xl md:text-2xl text-white mt-2">Indoor Sensing</h1>
            </div>

            <form method="POST" action="{{ route('login') }}" class="flex-1 bg-white w-full md:w-2/3 p-6">
                @csrf

                <h1 class="text-scndBlue text-xl md:text-2xl font-extrabold text-center mb-5">Đăng nhập</h1>

                <div class="mb-5">
                    <x-input-label for="email" :value="__('Email')" />
                    <x-text-input id="email" class="block mt-1 w-full focus:border-scndBlue focus:ring-1"
                        type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <div class="mt-4">
                    <x-input-label for="password" :value="__('Mật khẩu')" />
                    <x-text-input id="password" class="block mt-1 w-full focus:border-scndBlue" type="password"
                        name="password" required autocomplete="current-password" />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <div class="block mt-4">
                    <label for="remember_me" class="inline-flex items-center">
                        <input id="remember_me" type="checkbox"
                            class="rounded border-gray-300 text-gray-600 shadow-sm focus:ring-gray-500 active:border-scndBlue"
                            name="remember">
                        <span class="ms-2 text-sm text-gray-600">{{ __('Ghi nhớ tôi') }}</span>
                    </label>
                </div>

                <div class="mt-5 flex flex-col space-y-4">
                    {{-- @if (Route::has('password.request'))
                        <a class="text-sm text-gray-600 hover:text-gray-900"
                            href="{{ route('password.request') }}">
                            {{ __('Quên mật khẩu?') }}
                        </a>
                    @endif --}}

                    <x-primary-button class="w-full h-12 bg-scndBlue hover:bg-thirdBlue">
                        {{ __('Đăng nhập') }}
                    </x-primary-button>

                    <div class="text-center">
                        {{-- <span class="text-gray-600">{{ __('Chưa có tài khoản?') }}</span>
                        <a class="text-scndBlue font-bold hover:text-gray-700" href="{{ route('register') }}">
                            {{ __('Đăng ký ngay!') }}
                        </a> --}}
                    </div>
                </div>
            </form>
        </div>
    </div>

</x-guest-layout>
