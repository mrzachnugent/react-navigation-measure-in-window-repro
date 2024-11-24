# Measure in window off by header height repro

When using `ref.current?.measureInWindow`, the `y` value is off by the height of the header (unless the header is transparent/not shown).

## Steps to reproduce

1. Clone this repo
2. Run `npm install && npm run dev` to install the dependencies and start Expo Go in an iOS simulator.
3. Press the "Press here to open" button, the red square should appear right below the button.

### Working as expected with transparent header

1. Run `git checkout transparent-header`
2. Reload the app
3. Press the button again. The red square should now appear right below the button.
