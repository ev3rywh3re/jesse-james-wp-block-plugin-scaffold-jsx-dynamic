# jesse-james-wp-block-plugin-scaffold-jsx-dynamic# jesse-james-wp-block-plugin-scaffold-jsx-dynamic

This is a basic WordPress plugin project to provide some basic scaffolding for development.

## Features

* Goal to have a space for WP block experimentation that builds something. anything.

## Getting Started

This is mostly copied from my current experiments. So it may not be edited... You are warned.


npx @wordpress/create-block@latest dyn-jess

cd dyn-jess

npm i @wordpress/scripts@26.19.0
// Note version is downgrade because of issues.

npm install webpack webpack-cli
npm install @wordpress/blocks
npm install sass-loader css-loader 

npm run packages-update

npm install jsx-runtime

npm install @babel/preset-env --legacy-peer-deps

npm install -g webpack-cli

npm install babel-preset-react

npm install @wordpress/block-editor @wordpress/components
npm install sass-loader css-loader

npm install babel-loader

npm install @wordpress/block-editor @wordpress/blocks @wordpress/components


#!!! Clean new start

From: https://modularwp.com/how-to-build-gutenberg-blocks-jsx/

Custom package.json
npm install

Final commands:
npm run dev
npm run build




