package com.codetest;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import  android.widget.Toast;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Callback;

public class ButtonModule extends ReactContextBaseJavaModule {
    private  static ReactApplicationContext reactContext;

   ButtonModule(ReactApplicationContext context) {
       super(context);
       reactContext = context;
   }

   @NonNull
   @Override
    public String getName() {
       return "ButtonModule";
    }

    @ReactMethod
    public void show(String name, String location) {
        Toast.makeText(reactContext,name,Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void addCount(String count, Callback callback) {
        int i=Integer.parseInt(count);
        i = i + 1;
        callback.invoke(i);
    }
}