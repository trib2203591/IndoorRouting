@extends('layouts.general')
@section('pageTitle')
    <h1 class="text-scndBlue text-2xl font-extrabold" >Features Management</h1>
@endsection

@section('content')
    <form method="POST" action="{{ route(name: 'addAnchor') }}" class="flex-[2]" style="background-color:F3F6FF;">
            @csrf
            {{-- <div class="fixed w-2/5 h-3/5 hidden bg-white shadow-xl mb-10 rounded-xl" id="authForm"> --}}
            <div class="px-12 flex flex-col h-full" >
                <h1
                    class="h-full text-scndBlue text-2xl font-extrabold text-center mb-5 flex-[3] items-center flex mt-5">
                    Add feature 
                </h1>

                <div class="flex-[7] h-full">
                    <!-- Email Address -->
                    <div class="mb-5">
                        <x-input-label for="anchor_id" :value="__('Anchor id')" />
                        <x-text-input id="anchor_id" class="block mt-1 w-full focus:border-scndBLue focus:ring-1"
                            name="anchor_id" :value="old('anchor_id')" required autofocus
                           />
                        <x-input-error :messages="$errors->get('anchor_id')" class="mt-2" />
                    </div>
                    
                    <div class="mb-5">
                        <x-input-label for="feature_id" :value="__('Feature id')" />
                        <x-text-input id="feature_id" class="block mt-1 w-full focus:border-scndBLue focus:ring-1"
                            name="feature_id" :value="old('feature_id')" required autofocus
                         />
                        <x-input-error :messages="$errors->get('feature_id')" class="mt-2" />
                    </div>
                    
                    <div class="mb-5">
                        <x-input-label for="geometry" :value="__('Geometry')" />
                        <x-text-input id="geometry" class="block mt-1 w-full focus:border-scndBLue focus:ring-1"
                            name="geometry" :value="old('geometry')" required autofocus
                         />
                        <x-input-error :messages="$errors->get('geometry')" class="mt-2" />
                    </div>

                    <div class="mb-5">
                        <x-input-label for="unit_id" :value="__('Unit id')" />
                        <x-text-input id="unit_id" class="block mt-1 w-full focus:border-scndBLue focus:ring-1"
                            name="unit_id" :value="old('unit_id')" required autofocus
                         />
                        <x-input-error :messages="$errors->get('unit_id')" class="mt-2" />
                    </div>
                    
                    <div class="mb-5">
                        <x-input-label for="address_id" :value="__('Address id')" />
                        <x-text-input id="address_id" class="block mt-1 w-full focus:border-scndBLue focus:ring-1"
                            name="address_id" :value="old('address_id')" autofocus
                         />
                        <x-input-error :messages="$errors->get('address_id')" class="mt-2" />
                    </div>
                    

                    <x-primary-button class="ms-3 bg-scndBlue h-12 hover:bg-thirdBlue">
                            {{ __('Tạo đối tượng') }}
                    </x-primary-button>

                </div>


            </div>
        </form>
@endsection