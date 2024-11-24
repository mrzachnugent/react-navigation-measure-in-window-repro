# Measure in window `y` value is off repro

When using `ref.current?.measureInWindow`, the `y` value is off.

## Steps to reproduce

1. Clone this repo
2. Run `npm install && npm run dev` to install the dependencies and start Expo Go in an iOS simulator.
3. Press the "Press here to open" button, the red square should appear right below the button.
4. Check with android and web platforms as well

### Working as expected with transparent header

1. Run `git checkout transparent-header`
2. Reload the apps
3. Press the button again. The red square should now appear right below the button for iOs and web. It should still be off on android.
