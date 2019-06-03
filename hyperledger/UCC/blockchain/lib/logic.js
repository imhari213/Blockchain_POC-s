/* global getAssetRegistry getFactory emit query */

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.StoreHash} id - the id to be processed
 * @transaction
 */
async function saveHash(id) {
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.NewFilling');
    await assetRegistry.update(id.newFilling);
   
    let factory = getFactory();

    let basicEvent = factory.newEvent('org.example.mynetwork', 'BasicEvent');
    basicEvent.newfilling = id.newFilling;
    
    emit(basicEvent); 
}

