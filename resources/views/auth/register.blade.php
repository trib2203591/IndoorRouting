<x-guest-layout>
    <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col md:flex-row bg-scndBlue w-full max-w-lg md:max-w-4xl shadow-xl rounded-xl overflow-hidden">
            <div class="flex-1 flex flex-col items-center justify-center p-6">
                <img src="{{ asset('images/ctu.png') }}" alt="Logo" class="w-20 md:w-28">
                <h1 class="text-white text-lg font-light mt-1">Chào mừng đến với</h1>
                <h1 class="font-extrabold text-xl md:text-2xl text-white mt-2">CICT Indoor</h1>
            </div>

            <form method="POST" action="{{ route('register') }}" class="flex-1 bg-white w-full md:w-2/3 p-6">
                @csrf

                <h1 class="text-scndBlue text-xl md:text-2xl font-extrabold text-center mb-5">Đăng ký</h1>

                <div class="mb-4">
                    <x-input-label for="name" :value="__('Tên của bạn')" />
                    <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
                    <x-input-error :messages="$errors->get('name')" class="mt-2" />
                </div>

                <div class="mb-4">
                    <x-input-label for="email" :value="__('Email')" />
                    <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <div class="mb-4">
                    <x-input-label for="password" :value="__('Mật khẩu')" />
                    <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <div class="mb-4">
                    <x-input-label for="password_confirmation" :value="__('Xác nhận lại mật khẩu')" />
                    <x-text-input id="password_confirmation" class="block mt-1 w-full" type="password" name="password_confirmation" required autocomplete="new-password" />
                    <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between mt-4">
                    <a class="text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                        {{ __('Đã có tài khoản?') }}
                    </a>

                    <x-primary-button class="w-full md:w-auto h-12 bg-scndBlue hover:bg-thirdBlue mt-3 md:mt-0">
                        {{ __('Đăng ký') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-guest-layout>
