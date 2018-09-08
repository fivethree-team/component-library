# @fivethree/loading

## Installation
To get started, install the package from npm. The latest version supports Ionic v4 and Angular/RX 6.

```bash
npm install @fivethree/loading --save

# or if you are using yarn
yarn add @fivethree/loading
```

then in `app.module.ts`, import the `LoadingModule`:

```TS
import { NgModule } from '@angular/core';
import { LoadingModule } from '@fivethree/loading';

@NgModule({
  imports: [
    LoadingModule
  ]
})
export class AppModule {}
```