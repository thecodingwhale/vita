# Vita

> Quick and easy CV template made in react + redux.

This project will let you create a CV base on a json file.

## Usage

You can start creating your template like:

```
git clone git@github.com:thecodingwhale/vita.git
cd vita
npm install
```

Run in development (or production):

> npm run start

Or build for production (builds /static):

> npm run build

## Customization

Customization

- **client**
  - **data.json** — This is were you can edit the json data base on your career description.
  - **constants**
    - **colors.css** — Currently this template is using two color tone for simpler flat design tone.
      - **primaryColor** — The main overall color of you desire (currently hex value is #0F5E7C).
      - **accentColor** — This will be the emphasis color and should be mix well with the primaryColor (current hex value #d02e59).
    - **typography.css** — If you want to change the fonts you can change it here. For the font setup I use Google WebFontConfig.
      - **primaryFontStyle** — Base font for the header title tags.
      - **secondaryFontStyle** — For body content.
  - **index.html** - After changing the settings for typography.css the value for the WebFontConfig should also match for the changes.

I use [surge.sh](https://surge.sh/) for a quick hosting for frontend static sites.

## Sample

You can check my sample template here for my job experience overview[Click Here](http://aldrenterante.vita.surge.sh)

## Thanks

**vita** © 2016+, Aldren Terante Released under the [MIT] License.<br>
Authored and maintained by Aldren Terante with help from contributors ([list][contributors]).

> GitHub [@thecodingwhale](https://github.com/thecodingwhale)

[mit]: http://mit-license.org/
[contributors]: https://github.com/thecodingwhale/vita/contributors

### Note

This is base from TJ Holowaychuk - [React-Redux boilerplate](https://github.com/tj/frontend-boilerplate)
