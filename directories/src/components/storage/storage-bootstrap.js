<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c

class StorageBootstrap extends Component {

  constructor(props) {
    super(props);
    const {
      storage,
      storageBrokerNodeAddFn, 
      storageWebNodeAddFn,
      storageGenesisHashAddFn
    } = props;

<<<<<<< HEAD
    console.log('Storage BrokerNode -> ' + storage.brokerNode);
    console.log('Storage WebNode -> ' + storage.webNode);
    console.log('Storage GenesisHash -> ' + storage.genesisHash);
=======
    console.log("Storage BrokerNode -> " + storage.brokerNode);
    console.log("Storage WebNode -> " + storage.webNode);
    console.log("Storage GenesisHash -> " + storage.genesisHash);
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c

    storageBrokerNodeAddFn('Next BrokerNode');
    storageWebNodeAddFn('Next WebNode');
    storageGenesisHashAddFn('Next GenesisHash');

    this._getRandomItemFn(storage);
<<<<<<< HEAD

    console.log('DEMO 2');
    const randomStorage = this._getRandomStorage();
    console.log('randomStorage ' + randomStorage);
    console.log('transaction_id ' + storage.exchanges.transaction_id);
    console.log('need_requested ' + storage.exchanges.need_requested);
  }

  _getRandomStorage() {
    const random = this._randomFn(2);
    const storageTitle = this._getStorageNameFn(random);
    return storageTitle;
  }

  _getStorageNameFn(random) {
    let storageTitle = '';
    console.log(random);
    switch(random){
      case 0:
        storageTitle = 'broker_address';
        break;
      case 1:
        storageTitle = 'webnode_address';
        break;
      case 2:
        storageTitle = 'genesis_hash';
        break;
      default:
        storageTitle = '_getStorageTitleFn -> default';
    }
    return storageTitle;
=======
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c
  }

  _getRandomItemFn(storage) {
    const storageRandom = this._randomFn(1);
    console.log('Random number storage ->' + storageRandom);
    
    const storageType = this._getStorageFn(storage, storageRandom);
    const storageTitle = this._getStorageTitleFn(storageRandom);
    const storageCount = storageType.length;
    console.log('StorageType -> ' + storageType);
    console.log('StorageTypeCount -> ' + storageCount);
    
    const itemRandom =this._randomFn(storageCount)
    console.log('Random number item -> ' + itemRandom);

    const storageItem = this._getItemFn(storageType, itemRandom);
    console.log('StorageItem -> ' + storageItem + ' -> from -> ' + storageTitle);
  }

  _getItemFn(storage, random) {
    return storage[random];
  }

  _getStorageTitleFn(random) {
<<<<<<< HEAD
    let storageTitle = '';
    switch(random){
      case 0:
        storageTitle = 'storage.brokerNode';
        break;
      case 1:
        storageTitle = 'storage.webNode';
        break;
      case 2:
        storageTitle = 'storage.genesisHash';
        break;
      default:
        storageTitle = '_getStorageTitleFn -> default';
=======
    let storageTitle = [];
    if(random === 0) {
      storageTitle = 'storage.brokerNode';
    } else {
      storageTitle = 'storage.webNode';
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c
    }
    return storageTitle;
  }

  _getStorageFn(storage, random) {
    let storageType = [];
    if(random === 0) {
      storageType = storage.brokerNode;
    } else {
      storageType = storage.webNode
    }
    return storageType;
  }

  _randomFn(maxNumber) {
    const random = Math.floor(Math.random() * (maxNumber + 1));
    return random;
  }

  render() {
    return(<div></div>);
  }
}

export default StorageBootstrap;
